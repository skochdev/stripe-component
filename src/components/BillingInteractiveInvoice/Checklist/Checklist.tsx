import * as S from './Checklist.styled';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { Box } from '../../../utils/Box';
import { Checkbox } from './Checklist.styled';
//BsFillCheckCircleFill

interface ChecklistProps {
  checklistItems: {
    title: string;
    description: string;
  }[];
}

const Checklist = ({ checklistItems }: ChecklistProps) => {
  return (
    <>
      <S.List>
        {checklistItems.map(({ title, description }) => (
          <S.Item key={title}>
            <S.CheckIcon>
              <BsFillPlusCircleFill size="1.8rem" />
              {/*<S.Checkbox type="checkbox" />*/}
            </S.CheckIcon>

            <Box>
              <S.Title>{title}</S.Title>
              <S.Description>{description}</S.Description>
            </Box>
          </S.Item>
        ))}
      </S.List>
    </>
  );
};

export default Checklist;
