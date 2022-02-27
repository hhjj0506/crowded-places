import { React } from 'react';
import { NaverMap, Marker } from 'react-naver-maps';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps'
import { TextField } from '@mui/material';

function App(props) {
    return (
      <body>
        <div id='search'>
            <TextField id="outlined-basic" label="" variant="outlined" />
        </div>
        <div id='map'>
            <RenderAfterNavermapsLoaded	   // Render후 Navermap로드
                    ncpClientId={'kaqq42ubze'} // 자신의 네이버 계정에서 발급받은 Client ID
                    error={<p>Maps Load Error</p>}
                    loading={<p>Maps Loading...</p>}
                >
                <NaverMap
                    id="react-naver-maps-introduction"
                    style={{ width: '70%', height: '70vh' }}
                    center={{ lat:36.10249203600525, lng: 129.38981598415268 }}
                >
                    <Marker 
                        position={{ lat:36.10249203600525, lng: 129.38981598415268 }}
                        onClick={()=> {
                            alert('한동대학교')
                        }}
                    />
                </NaverMap>
            </RenderAfterNavermapsLoaded>
        </div>
      </body>

    )
}

export default App;