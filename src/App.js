import { useEffect, useRef, useState } from 'react'
import './App.css'
import Video from './pages/video/Video'

function App() {
  const videoRef = useRef()
  const [listVideo, setListVideo] = useState([])
  const [videoSelector, setVideoSelector] = useState('')
  const [activeVideo, setActiveVideo] = useState(false)

  useEffect(() => {
    setListVideo([
      'https://media.istockphoto.com/id/1323447855/vi/video/lê-chuyển-động-siêu-chậm-rơi-xuống-nước-với-bong-bóng-kh%C3%AD-quay-phim-trên-máy-ảnh-tốc-độ-cao-ở.mp4?s=mp4-640x640-is&k=20&c=itBQWZ-Qa4fWkpU5mfr6c1Y9YH2uHwsBTKLmZ4Qv3B4=',
      'https://media.istockphoto.com/id/1289026071/vi/video/nước-nảy-mầm-và-nhỏ-gi%E1%BB%8Dt-từ-một-đài-phun-nước-bằng-đá.mp4?s=mp4-640x640-is&k=20&c=eNL9jTDsXn2ZdzQ9oTPxTG5sFJ9be9o7BrNpxzz5Lmk=',
      'https://media.istockphoto.com/id/473341225/vi/video/đá-granit-tròn-nặng-được-quay-đáng-kinh-ngạc.mp4?s=mp4-640x640-is&k=20&c=S9AemikkhIIiNZ_0j5JYh_oHegK4BmswS8lTw1gLa9I='
    ])
  }, [])

  useEffect(() => {
    setVideoSelector(listVideo[0])
  }, [listVideo.length])

  const handleSelector = index => {
    setVideoSelector(listVideo[index])
  }

  const handleVideoController = () => {
    setActiveVideo(!activeVideo)
    if (activeVideo) {
      videoRef.current.pauseAction()
    } else {
      videoRef.current.playAction()
    }
  }

  return (
    <div>
      <Video ref={videoRef} src={videoSelector} />
      {listVideo.map((item, index) => {
        return (
          <div key={index}>
            <button
              onClick={() => {
                handleSelector(index)
              }}
            >
              Video {index}
            </button>
          </div>
        )
      })}
      <div
        style={{
          position: 'fixed',
          top: 0
        }}
      >
        <button onClick={handleVideoController}>{activeVideo ? 'Pause' : 'Play'}</button>
      </div>
    </div>
  )
}

export default App
