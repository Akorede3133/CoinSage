import {Space, Spin } from "antd"
const Loading = () => {
  return (
    <Space size="middle" className="min-h-screen flex justify-center">
      <Spin size="large" />
    </Space>
  )
}

export default Loading