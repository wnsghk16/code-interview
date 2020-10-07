import React, {useRef, useCallback, useState} from 'react';
import produce from 'immer';
import Button from "./components/Button";
import Text from "./components/Text";

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({title: '', content: ''});
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

  // input 수정을 위한 함수
  const onChange = useCallback(e => {
    const {name, value} = e.target;
    setForm(
      produce(draft => {
        draft[name] = value;
      })
    );
  }, []);

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        title: form.title,
        content: form.content
      };

      // array 에 새 항목 등록
      setData(
        produce(draft => {
          draft.array.push(info);
        })
      );

      // form 초기화
      setForm({
        title: '',
        content: ''
      });
      nextId.current += 1;
    },
    [form.title, form.content]
  );

  // 항목을 삭제하는 함수
  const onRemove = useCallback(
    id => {
      setData(
        produce(draft => {
          draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
        })
      );
    },
    []
  );

  return (
    <div>
      <form onSubmit={onSubmit} style={{padding: '100px'}}>
        <div>
          <Text
            TextTitle={"제목"}
            TextColor={"blue"}
          />
          <input
            name="title"
            placeholder="제목"
            value={form.title}
            onChange={onChange}
          />
        </div>
        <div>
          <Text
            TextTitle={"내용"}
            TextColor={"red"}
          />
          <input
            name="content"
            placeholder="내용"
            value={form.content}
            onChange={onChange}
          />
        </div>
        <Button Text={"등록"}/>
      </form>
      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id}>
              {info.title}({info.content})
              <button onClick={() => onRemove(info.id)}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
