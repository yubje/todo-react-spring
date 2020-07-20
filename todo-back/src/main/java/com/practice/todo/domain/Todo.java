package com.practice.todo.domain;
 
import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
 
@Getter
@Setter
@NoArgsConstructor
@Entity // Entity 클래스 => 테이블과 매핑됨 
@Table  // 별도의 이름을 갖는 데이터베이스 테이블과 매핑 
public class Todo implements Serializable {
 
    /**
     * 
     */
    private static final long serialVersionUID = -947585423656694361L;
    
    @Id   	// primary key를 갖는 변수 선언 
    @Column // 멤버 변수명과 일치하는 데이터베이스 칼럼을 매핑 (필수 X)
    // 기본 키가 자동으로 할당되도록 설정하는 어노테이션 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column
    private String content;
    
    @Column
    private LocalDateTime createdDateTime;
    
    @Column
    private Boolean isComplete;
 
    @Builder
    public Todo(Long id, String content, LocalDateTime createdDateTime, Boolean isComplete) {
        this.id = id;
        this.content = content;
        this.createdDateTime = createdDateTime;
        this.isComplete = isComplete;
    }
 
    @Override
    public String toString() {
        return "Todo [id=" + id + 
                ", content=" + content + 
                ", createdDateTime=" + createdDateTime + 
                ", isComplete=" + isComplete + "]";
    }
}