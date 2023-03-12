import { useRef, useImperativeHandle, forwardRef } from 'react'

function Video(props, ref) {
  const videoRef = useRef()

  useImperativeHandle(
    ref,
    () => ({
      playAction() {
        videoRef.current.play()
      },
      pauseAction() {
        videoRef.current.pause()
      }
    }),
    []
  )

  return <video muted={false} ref={videoRef} src={props.src} width={450} />
}

export default forwardRef(Video) // forwardRef (HOC) sẽ trả về một props có tên là ref
