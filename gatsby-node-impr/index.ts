import { GatsbyOnCreatePage } from './types';
// import { resolve } from 'path';

export const onCreateNode: GatsbyOnCreatePage<{}> = ({ node }) => {
  console.dir(node.internal.type);
  if (node.internal.type === `MarkdownRemark`) {
    console.log(node.internal.type);
  }
};

// export const createPages: GatsbyCreatePages<{ karuta: Karuta }> = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const result = await graphql(`
//     {
//       allKaruta {
//         edges {
//           node {
//             internal {
//               content
//             }
//           }
//         }
//       }
//     }
//   `);
//   result.data.allKaruta.edges.map(data => {
//     const karuta = JSON.parse(data.node.internal.content) as Karuta;
//     createPage({
//       path: `/karutas/${karuta.no}`,
//       component: resolve(`./src/templates/karutas.tsx`),
//       context: {
//         karuta,
//       },
//     });
//   });
// };

// export const sourceNodes: GatsbySourceNodes<Karuta> = async ({ actions, createNodeId, createContentDigest }) => {
//   const { createNode } = actions;
//   const response = await axios.get(KARUTA_JSON_URL);
//   if (response.status === 200) {
//     const json = response.data;
//     const data = {};
//     convertCamelKey<{ karutaList?: Karuta[] }>(json, data);

//     // tslint:disable-next-line:no-string-literal
//     data['karutaList']!.forEach(karuta => {
//       const id = createNodeId(`karuta-${karuta.id}`);
//       const fixed = { ...karuta, no: karuta.id, id };
//       const nodeContent = JSON.stringify(fixed);
//       const nodeMeta = {
//         id,
//         parent: undefined,
//         children: [],
//         internal: {
//           type: `Karuta`,
//           content: nodeContent,
//           contentDigest: createContentDigest(fixed),
//         },
//       };
//       createNode({ ...fixed, ...nodeMeta });
//     });
//   } else {
//     throw new Error('sourceNodes failed');
//   }
// };
