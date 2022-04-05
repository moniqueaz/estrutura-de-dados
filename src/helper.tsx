
import hljs from 'highlight.js';

type HighlighterProps = {
  content: string;
  language?: string;
}

export const Code = ( {
  content,
  language,
}: HighlighterProps): JSX.Element => {
  const highlighted = language ? hljs.highlight(content, { language } ) : hljs.highlightAuto(content);

  return (
    <pre className="hljs">
      <code dangerouslySetInnerHTML={{ __html: highlighted.value }} />
    </pre>
  );
};

