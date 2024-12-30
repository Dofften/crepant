import path from 'path';
import { Fragment } from 'react';
import { readMDXFile } from '../blog/utils';
import { CustomMDX } from '../components/mdx';
import UsesTitle from './uses-title';

const contentPath = path.join(process.cwd(), 'app', 'uses', 'content.mdx');
const { content } = readMDXFile(contentPath);

export const metadata = {
<<<<<<< HEAD
  title: 'Uses - Frank Omondi',
  description: 'What I Use - Frank Omondi',
=======
  title: 'Uses',
  description: 'What I use',
>>>>>>> 19eaa5af46a9ecf1ad24aaf91d3ef6afbafb6083
};

export default function Page() {
  return (
    <Fragment>
      <UsesTitle />
      <CustomMDX source={content} />
    </Fragment>
  );
}
