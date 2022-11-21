import markdownStyles from '../markdown-styles.module.css';

export default function PrintMarkdownHTML({ content, about }) {
  return (
    <div
      className={about ? markdownStyles.about : markdownStyles.markdown}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
