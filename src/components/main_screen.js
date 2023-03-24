import React from 'react';
import { Button, Rate, Input } from 'antd';

const MainScreen = () => {
    const TextArea = Input;
    return (
        <div style={{
            textAlign: "center"
        }}>
            <div style={{
                width: "1080px",
                height: "400px",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <div style={{
                    width: "360px",
                    height: "360px",
                    border: "1px solid black"
                }}>
                    Văn bản gốc
                </div>
                <div style={{
                    width: "360px",
                    height: "360px",
                    border: "1px solid black"
                }}>
                    Văn bản tóm tắt
                </div>
            </div>
            <Button type="primary">Tóm tắt</Button>
            <p>
                Để sử dụng lượt tiếp theo, vui lòng đánh giá chất lượng văn bản tóm tắt
            </p>
            <p>
                Ý kiến đóng góp 
            </p>
            <Rate />
            <TextArea rows={4} placeholder="mời nhập nhận xét" maxLength={7} />
        </div>
    )
}

export default MainScreen;