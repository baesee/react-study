import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";

const Edit = () => {
    const nav = useNavigate();
    const params = useParams();
    const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

    const currentDiaryItem = useDiary(params.id);

    const onClickDelete = () => {
        if (window.confirm("일기를 정말 삭제하시겠습니까?")) {
            onDelete(params.id);
            nav('/', { replace: true });
        }
    }
    const onSubmit = (input) => {
        if (window.confirm("일기를 수정하시겠습니까?")) {
            onUpdate(params.id, input.createDate.getTime(), input.emotionId, input.content);
            nav('/', { replace: true });
        }
    }
    return <div>
        <Header title={"일기 수정하기"}
            leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />}
            rightChild={<Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />} />
        <Editor onSubmit={onSubmit} initData={currentDiaryItem} />
    </div>

}
export default Edit;