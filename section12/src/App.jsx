import './App.css'
import { useReducer, useRef, createContext } from 'react' // 리덕스 사용 시 필요
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import NotFound from './pages/NotFound'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Button from './components/Button'
import Header from './components/Header'
import Edit from './pages/Edit'
import { getEmotionImage } from './util/get-emotion-image'

const mockData = [
  {
    id: 1,
    createDate: new Date("2024-08-10").getTime(),
    emotionId: 1,
    content: '1번 일기 내용',
  },
  {
    id: 2,
    createDate: new Date("2024-08-09").getTime(),
    emotionId: 2,
    content: '2번 일기 내용',
  },
  {
    id: 3,
    createDate: new Date("2024-08-03").getTime(),
    emotionId: 3,
    content: '3번 일기 내용',
  },
  {
    id: 4,
    createDate: new Date("2024-07-01").getTime(),
    emotionId: 4,
    content: '4번 일기 나의 생일이다 생년월이이ㅣ다.',
  },
  {
    id: 5,
    createDate: new Date("2023-12-29").getTime(),
    emotionId: 5,
    content: '5번 일기 내용',
  },
]

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE': return [action.data, ...state]
    case 'UPDATE': return state.map((item) =>
      String(item.id) === String(action.data.id) ? action.data : item)
    case 'DELETE': return state.filter((item) => String(item.id) !== String(action.id))
    default: return state
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {

  const [data, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(3)

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      },
    })
  }
  // 기존 일기 수정
  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createDate,
        emotionId,
        content
      }
    })
  }
  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id
    })
  }

  const nav = useNavigate();
  const onClickButton = () => {
    nav('/new');
  }
  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider >

      {/* <button onClick={() => {
        onCreate(new Date().getTime(), 1, '생성한 일기 내용')
      }}>일기 생성 버튼</button>
      <button onClick={() => {
        onUpdate(1, new Date().getTime(), 3, '수정한 일기 내용')
      }}>일기 수정 버튼</button>
      <button onClick={() => {
        onDelete(1)
      }}>일기 삭제 버튼</button> */}

      {/* <Header title={'감정 일기장'}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />
      <Button text={'받아라 버튼'} type={"DEFAULT"} onClick={() => { console.log('버튼이 클리 되었다 크햐햐햐') }} />
      <Button text={'받아라 버튼'} type={"POSITIVE"} onClick={() => { console.log('버튼이 클리 되었다 크햐햐햐') }} />
      <Button text={'받아라 버튼'} type={"NEGATIVE"} onClick={() => { console.log('버튼이 클리 되었다 크햐햐햐') }} />
      <div>
        <img src={getEmotionImage(1)} alt="emotion1" />
        <img src={getEmotionImage(2)} alt="emotion2" />
        <img src={getEmotionImage(3)} alt="emotion3" />
        <img src={getEmotionImage(4)} alt="emotion4" />
        <img src={getEmotionImage(5)} alt="emotion5" />
      </div>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/new'>New</Link>
        <Link to='/diary'>Diary</Link>
      </div>
      <hr />
      <button onClick={onClickButton}>New 페이지로 이동</button> */}
    </>
  )
}

export default App
