import { useState } from 'react'
import './chatList.css'

const ChatList = () => {
  const [addModel,setAddModel] = useState(false);
  return (
    <div className='chatList'>
        <div className="search">
            <div className="searchBar">
                <img src="./search.png" alt="" />
                <input type="text" placeholder='请输入要搜索的内容' />
            </div>
            <img src={addModel ? "./minus.png" : "./plus.png"} alt="" className='add' onClick={() => setAddModel((prev) => !prev)}/>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Wang Jin</span>
            <p>鑫哥好！</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Wang Jin</span>
            <p>鑫哥好！</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Wang Jin</span>
            <p>鑫哥好！</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Wang Jin</span>
            <p>鑫哥好！</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Wang Jin</span>
            <p>鑫哥好！</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Wang Jin</span>
            <p>鑫哥好！</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Wang Jin</span>
            <p>鑫哥好！</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Wang Jin</span>
            <p>鑫哥好！</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Wang Jin</span>
            <p>鑫哥好！</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Wang Jin</span>
            <p>鑫哥好！</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Wang Jin</span>
            <p>鑫哥好！</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Wang Jin</span>
            <p>鑫哥好！</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Wang Jin</span>
            <p>鑫哥好！</p>
          </div>
        </div>
    </div>
  )
}

export default ChatList