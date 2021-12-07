import styled from "styled-components";
import { useParams } from "react-router";
import { AvatarContainer } from "../../components/Avatar/Avatar";
import FrontCourseCalendar from "./components/FrontCourseCalendar";
import teacher from "../../img/teacher.jpeg";
import student1 from "../../img/student1.png";
import student2 from "../../img/student2.jpeg";
import student3 from "../../img/student3.jpeg";
import CommentCard from "./components/CommentCard";
import {
  MEDIA_QUERY_MD,
  MEDIA_QUERY_SM,
} from "../../components/constants/breakpoints";

const TeacherProfileWrapper = styled.section`
  padding: 180px 200px 232px 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    padding: 180px 150px 232px 150px;
  }
  ${MEDIA_QUERY_MD} {
    padding: 180px 30px 232px 30px;
  }
`;
const RowContainer = styled.div`
  display: flex;
`;
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const TeacherAvatarContainer = styled(ColumnContainer)`
  align-items: center;
  justify-content: center;
  margin-right: 50px;
`;
const TeacherAvatar = styled(AvatarContainer)`
  width: 150px;
  height: 150px;
`;
const AvatarName = styled.p`
  color: ${(props) => props.theme.colors.grey_dark};
  font-size: 1.2rem;
  margin-top: 12px;
`;
const TeacherInfosContainer = styled(RowContainer)`
  justify-content: center;
  align-items: center;
  ${MEDIA_QUERY_SM} {
    flex-direction: column;
  }
`;
const CourseInfosContainer = styled(ColumnContainer)`
  color: ${(props) => props.theme.colors.grey_dark};
  margin-left: 15px;
  width: 100%;
`;
const ItemContainer = styled(ColumnContainer)`
  border-bottom: 2px dotted ${(props) => props.theme.colors.orange};
  margin-bottom: 20px;
`;
const ItemTitle = styled.h3`
  color: ${(props) => props.theme.colors.orange};
  font-size: 1.1rem;
  margin-bottom: 2px;
`;
const ItemContent = styled.p`
  color: ${(props) => props.theme.colors.grey_dark};
  font-size: 1rem;
  padding-left: 5px;
  margin-bottom: 5px;
`;
const SectionTitle = styled.h1`
  color: ${(props) => props.theme.colors.green_dark};
  font-size: 1.5rem;
  margin: 40px 0 10px 0;
`;
const SectionIntro = styled(ItemContent)`
  font-size: 1.1rem;
`;
const CommentsContainer = styled(ColumnContainer)``;

function FrontCoursePage() {
  const { courseId } = useParams();
  return (
    <TeacherProfileWrapper>
      <TeacherInfosContainer>
        <TeacherAvatarContainer>
          <TeacherAvatar imgSrc={teacher} name="Kelly" />
          <AvatarName>Kelly</AvatarName>
        </TeacherAvatarContainer>
        <CourseInfosContainer>
          <ItemContainer>
            <ItemTitle>領域</ItemTitle>
            <ItemContent>程式</ItemContent>
          </ItemContainer>
          <ItemContainer>
            <ItemTitle>課程名稱</ItemTitle>
            <ItemContent>一起來學習超潮的 Ruby 吧！</ItemContent>
          </ItemContainer>
          <ItemContainer>
            <ItemTitle>單堂價格</ItemTitle>
            <ItemContent>1000</ItemContent>
          </ItemContainer>
        </CourseInfosContainer>
      </TeacherInfosContainer>
      <SectionTitle>課程時間</SectionTitle>
      <FrontCourseCalendar courseId={courseId} />
      <SectionTitle>課程介紹</SectionTitle>
      <SectionIntro>
        經過幾年的發展，Spring Boot
        的功能已經非常成熟，並且在近幾年軟體業盛行微服務（microservice）的設計模式下，也帶動越來越多企業選擇使用
        Spring Boot 作為主流的開發工具。Spring Boot
        之所以能夠成為目前業界最流行的開發工具，原因就在於 Spring Boot 憑借著
        簡化 Spring 開發 以及 快速整合主流框架
        的優點，讓工程師們可以更專注的在解決問題上，進而提升了前期開發和後續部署的效率。
      </SectionIntro>
      <SectionTitle>課程評價</SectionTitle>
      <CommentsContainer>
        <CommentCard
          imgSrc={student1}
          name="小豪"
          content="課程將SQL的語法結構邏輯以及重要語法的功能與使用觀念，以非常循序漸進的主題節奏來教學，讓我能逐步由淺入深地建構對SQL重點觀念的理解，原本自己對於SQL有些粗淺的認識、但對於實際運用時的語法運作邏輯並不是那麼有把握，經過課程系統性的教學、以及每章節課後練習題立即的複習、演練、體驗該章節語法的運作邏輯，讓我釐清許多過去常常不知其所以然的語法邏輯卡關，實際演練練習題不僅能從做中學也讓人很有成就感，有動力及信心繼續深入學習。"
        />
        <CommentCard
          imgSrc={student2}
          name="小葵"
          content="課程將SQL的語法結構邏輯以及重要語法的功能與使用觀念，以非常循序漸進的主題節奏來教學，讓我能逐步由淺入深地建構對SQL重點觀念的理解，原本自己對於SQL有些粗淺的認識、但對於實際運用時的語法運作邏輯並不是那麼有把握，經過課程系統性的教學、以及每章節課後練習題立即的複習、演練、體驗該章節語法的運作邏輯，讓我釐清許多過去常常不知其所以然的語法邏輯卡關，實際演練練習題不僅能從做中學也讓人很有成就感，有動力及信心繼續深入學習。"
        />
        <CommentCard
          imgSrc={student3}
          name="小花"
          content="課程將SQL的語法結構邏輯以及重要語法的功能與使用觀念，以非常循序漸進的主題節奏來教學，讓我能逐步由淺入深地建構對SQL重點觀念的理解，原本自己對於SQL有些粗淺的認識、但對於實際運用時的語法運作邏輯並不是那麼有把握，經過課程系統性的教學、以及每章節課後練習題立即的複習、演練、體驗該章節語法的運作邏輯，讓我釐清許多過去常常不知其所以然的語法邏輯卡關，實際演練練習題不僅能從做中學也讓人很有成就感，有動力及信心繼續深入學習。"
        />
      </CommentsContainer>
    </TeacherProfileWrapper>
  );
}

export default FrontCoursePage;
