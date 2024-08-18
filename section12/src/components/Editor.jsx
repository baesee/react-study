import './Editor.css';
import EmotionItem from './EmotionItem';
import Button from './Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { emotionList } from '../util/constants';
import { getStringedDate } from '../util/getStringedDate';

const Editor = ({ initData, onSubmit }) => {
    const nav = useNavigate();
    const [input, setInput] = useState({
        createDate: new Date(),
        emotionId: 3,
        content: ''
    });

    useEffect(() => {
        if (initData) {
            setInput({
                ...initData,
                createDate: new Date(Number(initData.createDate))
            });
        }
    }, [initData]);

    const onChanageInptut = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === 'createDate') {
            value = new Date(value);
        }

        setInput({
            ...input,
            [name]: value
        })
    }

    const onClickSubmitButton = () => {
        onSubmit(input);
    }

    return <div className="Editor">
        <section section className='date_section' >
            <h4>오늘의 날짜</h4>
            <input name="createDate" onChange={onChanageInptut} value={getStringedDate(input.createDate)} type="date" />
        </section >
        <section className='emotion_section'>
            <h4>오늘의 감정</h4>
            <div className='emotion_list_wrapper'>
                {emotionList.map((item) =>
                    <EmotionItem onClick={() => onChanageInptut({
                        target: {
                            name: 'emotionId',
                            value: item.emotionId
                        }
                    })} key={item.emotionId}
                        {...item}
                        isSelected={item.emotionId === input.emotionId} />)
                }
            </div>
        </section >
        <section className='content_section'>
            <h4>오늘의 일기</h4>
            <textarea name="content" value={input.content} onChange={onChanageInptut} placeholder='오늘의 일기를 작성해보세요.' />
        </section>
        <section className='button_section'>
            <Button onClick={() => { nav(-1) }} text={'취소하기'} />
            <Button onClick={onClickSubmitButton} text={'작성완료'} type={'POSITIVE'} />
        </section>
    </div >
}

export default Editor;  