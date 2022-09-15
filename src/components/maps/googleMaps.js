import React, { } from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Circle,
    InfoWindow
} from "react-google-maps";
import { Cacher } from "../../services/cache";

function MapComponent(props) {
    const { coordinates, isError } = props;
    return (
        <GoogleMap
            defaultZoom={13}
            defaultCenter={coordinates}
            center={coordinates}
        >
            {!isError && <Circle
                center={coordinates}
                radius={500}
            />}

            {isError && <InfoWindow position={coordinates}>
                <div>
                    <h4>Google api is not working!!!</h4>
                </div></InfoWindow>}
        </GoogleMap>
    )
}


function WithGeocode(_wrapperFun) {
    return class extends React.Component {
        constructor() {
            super();
            this.Cacher = new Cacher();
            this.state = {
                coordinates: {
                    lat: 0, lng: 0

                }, isError: false
            };
        }

        componentWillMount() {
            this.getGeocodelLocation();
        }

        getGeocodelLocationHelper(location) {
            const geoCoder = new window.google.maps.Geocoder();
            return new Promise((resolve, reject) => {
                geoCoder.geocode({ address: location }, (result, status) => {
                    if (status === 'OK') {
                        const geometry = result[0].geometry.location;
                        const coordinates = { lat: geometry.lat(), lng: geometry.lng() }
                        this.Cacher.cacheValue(location, coordinates);
                        resolve(coordinates);
                    } else {
                        reject('Error !!');
                    }
                })
            })
        }

        getGeocodelLocation() {
            const location = this.props.location;
            if (this.Cacher.getCachedValue(location)) {
                this.setState({
                    coordinates: this.Cacher.getCachedValue(location)
                })
            } else {
                this.getGeocodelLocationHelper(location).then((coordinates) => {
                    this.setState({
                        coordinates
                    })
                }, (error) => {
                    this.setState({
                        isError: true
                    })
                })
            }
        }
        render() { return (<_wrapperFun {...this.state} />) };

    }
}
export const MapWithAMarker = withScriptjs(withGoogleMap(WithGeocode(MapComponent)));
