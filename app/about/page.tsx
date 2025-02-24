import path from 'path';
import { Fragment } from 'react';
// import { Suspense } from 'react';
import { readMDXFile } from '../blog/utils';
import { CustomMDX } from '../components/mdx';
// import TopTracks from '../components/spotify/top-tracks';
import GithubContributions from './github-contributions/github-contributions';
import Occupation from './occupation';

const contentPath = path.join(process.cwd(), 'app', 'about', 'content.mdx');
const { content } = readMDXFile(contentPath);

export const metadata = {
  title: 'About - Frank Omondi',
  description: 'About me - Frank Omondi',
};

export default function Page() {
  return (
    <Fragment>
      <Occupation />
      <CustomMDX source={content} />
      <br></br>
      <GithubContributions />
      {/* <Suspense fallback="loading..">
        <TopTracks />
      </Suspense> */}
    </Fragment>
  );
}
