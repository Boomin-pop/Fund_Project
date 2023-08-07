package com.kmong.kmongdemo.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseDTO<T> {
    // 응답 상태코드
    private int status;

    // 실제 응답 데이터
    private T data; // 문자열 || 하나의엔티티 || 여러개의 리스트<엔티티>
}
