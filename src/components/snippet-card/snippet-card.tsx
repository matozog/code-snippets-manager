import { FC } from 'react';
import { ICodeSnippet } from 'src/types/models';
import MuiPaper from '../paper/mui-paper';
import SnippetCardContent from './content/snippet-card.content';
import { SnippetCardWrapper } from './snippet-card.jss';

interface ISnippetCardProps {
  codeSnippet: ICodeSnippet;
}

const SnippetCard: FC<ISnippetCardProps> = ({ codeSnippet }) => {
  return (
    <SnippetCardWrapper>
      <MuiPaper elevation={8} style={{ height: '100%' }}>
        <SnippetCardContent codeSnippet={codeSnippet} />
      </MuiPaper>
    </SnippetCardWrapper>
  );
};

export default SnippetCard;
