import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function RoutePage() {
  const navigate = useNavigate()
   // 使用 useEffect 在组件挂载后调用 getRoute
  useEffect(() => {
    // 循环获取路由信息
    const routeInterval = setInterval(() => {
      jumpRoute();
    }, 1000);
    // 清理定时器：组件卸载时执行
    return () => {
      clearInterval(routeInterval);
    };
  }, [])

  function jumpRoute() {
    let route = window.windowControl.getSelfWindowStartRoute()
    navigate(route)
  }

  return (
    <div>
      路由加载中
    </div>
  )
}

export default RoutePage