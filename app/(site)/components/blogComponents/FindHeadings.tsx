// *[ _type == "article" ] {
//     body,
//     "headings": body[length(style) == 2 && string::startsWith(style, "h")]
//   }

//   const getChildrenText = props =>
//   props.children
//     .map(node => (typeof node === 'string' ? node : node.text || ''))
//     .join('')

// const TableOfContents = props => (
//   <ol>
//     {props.outline.map(heading => (
//       <li>
//         <a href={'#' + heading._key}>{getChildrenText(heading)}</a>
//         {heading.subheadings.length > 0 && (
//           <TableOfContents outline={heading.subheadings} />
//         )}
//       </li>
//     ))}
//   </ol>
// )


  
  const getChildrenText = (props: { children: (string | { text?: string })[] }): string =>
    props.children
      .map((node) => (typeof node === 'string' ? node : node.text || ''))
      .join('');
  
 export const TableOfContents = (props: { outline: any[] }): JSX.Element => (
    <ol>
      {props.outline.map((heading: any) => (
        <li key={heading._key}>
          <a href={'#' + heading._key}>{getChildrenText(heading)}</a>
          {heading.subheadings.length > 0 && (
            <TableOfContents outline={heading.subheadings} />
          )}
        </li>
      ))}
    </ol>
  );