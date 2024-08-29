import { useState } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {
  const [open,setOpen] = useState(false)
  const [text,setText] = useState("")

  // 表情
  const handelEmoji = e => {
    setText(prev => prev + e.emoji)
    setOpen(false)
  }

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Wang Jin</span>
            <p>美女你好，我叫王劲！</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder='请输入要发送的内容...' value={text} onChange={e => setText(e.target.value)}/>
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setOpen(prev => !prev)}/>
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handelEmoji}/>
          </div>
        </div>
        <button className='sendButton'>发送</button>
      </div>
    </div>
  )
}

export default Chat