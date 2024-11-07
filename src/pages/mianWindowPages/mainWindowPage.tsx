import { useNavigate } from 'react-router-dom'

import './mainWindowPage.style.css'

function MainWindowPage() {
    const navigate = useNavigate()

    function closeWindow() {
        window.windowControl.windowManagerSelf('close')
    }
    async function getScreenInfo() {
        let info = await window.screenInfo.getScreenData()
        console.log(info);
        
    }

    return (
        <div>
            <div className='dragZone'>拖动区域</div>
            <div>主窗口入口</div>
            <div onClick={()=>{getScreenInfo()}}>获取屏幕信息</div>
            <div onClick={()=>{closeWindow()}}>关闭</div>
        </div>
    )
}

export default MainWindowPage;

