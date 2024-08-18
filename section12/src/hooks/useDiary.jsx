import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const [currentDiaryItem, setCurrentDiaryItem] = useState();
    const nav = useNavigate();
    useEffect(() => {
        const currentDirayItem = data.find((item) => String(item.id) === String(id));

        if (!currentDirayItem) {
            window.alert("없는 일기입니다.");
            nav('/', { replace: true });
        }

        setCurrentDiaryItem(currentDirayItem)
    }, [id, data])

    return currentDiaryItem;
}

export default useDiary;