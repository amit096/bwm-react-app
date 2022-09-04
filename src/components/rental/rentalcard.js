import React from 'react';

export function RentalCard(){
    return(
        <div className='col-md-3 col-xs-6'>
        <div className='card bwm-card'>
          <img className='card-img-top' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAADwCAYAAABISgwwAAAAAXNSR0IArs4c6QAAFUNJREFUeF7t3YWS6zgCBdC8YWZmZp7//4NhZmZmhq3bW5n108iRk1bUvTPHVV2z+5xIzrF8I8uyc+Kxxx77c2UhQIAAgWECJwTvMGsVESBA4EBA8GoIBAgQGCwgeAeDq44AAQKCVxsgQIDAYAHBOxhcdQQIEBC82gABAgQGCwjeweCqI0CAgODVBggQIDBYQPAOBlcdAQIEBK82QIAAgcECgncwuOoIECAgeLUBAgQIDBYQvIPBVUeAAAHBqw0QIEBgsIDgHQyuOgIECAhebYAAAQKDBQTvYHDVESBAQPBqAwQIEBgsIHgHg6uOAAECglcbIECAwGABwTsYXHUECBAQvNoAAQIEBgsI3sHgqiNAgIDg1QYIECAwWEDwDgZXHQECBASvNkCAAIHBAoJ3MLjqCBAgIHi1AQIECAwWELyDwVVHgAABwasNECBAYLCA4B0MrjoCBAgIXm2AAAECgwUE72Bw1REgQEDwagMECBAYLCB4B4OrjgABAoJXGyBAgMBgAcE7GFx1BAgQELzaAAECBAYLCN7B4KojQICA4NUGCBAgMFhA8A4GVx0BAgQErzZAgACBwQKCdzC46ggQICB4tQECBAgMFhC8g8FVR4AAAcGrDRAgQGCwgOAdDK46AgQICF5tgAABAoMFBO9gcNURIEBA8GoDBAgQGCwgeAeDq44AAQKCVxsgQIDAYAHBOxhcdQQIEBC82gABAgQGCwjeweCqI0CAgODVBggQIDBYQPAOBlcdAQIEBK82QIAAgcECgncwuOoIECAgeLUBAgQIDBYQvIPBVUeAAAHBqw0QIEBgsIDgHQyuOgIECAhebYAAAQKDBQTvYHDVESBAQPBqAwQIEBgsIHgHg6uOAAECglcbIECAwGABwTsYXHUECBAQvNoAAQIEBgsI3sHgqiNAgIDg1QYIECAwWEDwDgZXHQECBASvNkCAAIHBAoJ3MLjqCBAgIHi1AQIECAwWELyDwVVHgAABwasNECBAYLCA4B0MrjoCBAgIXm2AAAECgwUE72Bw1REgQEDwagMECBAYLCB4B4OrjgABAoJXGyBAgMBgAcE7GFx1BAgQELzaAAECBAYLCN7B4KojQICA4NUGCBAgMFhA8A4GVx0BAgQErzZAgACBwQKCdzC46ggQICB4tQECBAgMFhC8g8FVR4AAAcGrDRAgQGCwgOAdDK46AgQICF5tgAABAoMFBO9gcNURIEBA8GoDBAgQGCwgeAeDq44AAQKCVxsgQIDAYAHBOxhcdQQIEBC82gABAgQGCwjeweCqI0CAgOA9ojZwxhlnrC666KLVmWeeuTr99NNXv//+++rHH388+Pv+++9Xf/zxxxFt2Xy1p5566urcc889+Ms2Zxt/+umn1bfffrv6+eefj9329t6gU045ZXXppZeuzjrrrFX2X/5/Pnf2Vwx++eWXrlVecMEFqyuvvPKvMt9///3VDz/8sFUd2U/nnXfe6pxzzlll//32228HbSzbm/9tORoBwTvY/ZJLLlldd911B8G1aUmgvfXWWwcHdWu59tprV1dddVXrZdX1qef555/f+N7TTjttddNNN60uvPDC2df9+uuvqw8//HD16aef7rQdx/lNCdpbbrlldfbZZzc38+OPP1699957zde1XpCQfPDBB1cnTpz466Xvvvvu6pNPPmm99WB9gvbmm28++JKYWxLiKfO7775bVKYX9RMQvP0smyXdeuutB73cbZb0TF555ZWNb7n99ttX6R3tsiQwn3nmmdm3nn/++as77rhjcdHffPPN6rXXXlv9+eefi99znF+YHme+KLdZ0vPNPjvMWcA999zzt6BfGrzXXHPN6uqrr168yR988MHBl6ZlnIDgHWR9/fXXr6644oqdaksvJwfd3HLvvfdu7NlsqnRT8KbXdNddd53U61ryAdKDevnll5e89Fi/Jl+S+bLcZckwzNNPP73TkFFCM+FZLkuCN20sbW3bJcMYH3300bZv8/odBQTvjnDbvC2nqOnBlMt6XDfDCRlvS9DlYJ+eXq7fkx5Uer+15aGHHjoYv9tlyenmiy++uLjc9GQzPJGebcY5M35YGzZZEhK7bO+o92T8Nq7lvlh//ny5ZKw0p/IZgslYfbl89dVXq9dff32rTU4buPvuu6vvaZlmG+67776/vTdfAmlj2ebpeG/5wgw5Zd9a9i8gePdvvLrtttv+Nj6aA+Gll176W+054HNqnwtY0+XLL79cvfHGG9WtffTRR//699bQwdKPWzvFzgGcYYl8YUyXXHDKGPB0yWuffPLJpdUdu9dlzDxj5+Vneu6551YxLpe5nuYLL7xwENBLloT8Aw88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' alt=''></img>
          <div className='card-block'>
            <h6 className='card-subtitle'>Whole Apartment &#183; Delhi</h6>
            <h4 className='card-title'>Some nice apartment</h4>
            <p className='card-text'>Rs2400 per Night &#183; Free Cancelation</p>
            <a href='' className='card-link'>More Info</a>
          </div>
        </div>
      </div>
    );
}