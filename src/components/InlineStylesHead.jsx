/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-danger */
/* eslint-disable class-methods-use-this */
import React from 'react';
import {
  Head,
} from 'next/document';
import memoize from 'lodash.memoize';
import { readFileSync } from 'fs';
import { resolve } from 'path';
// https://stackoverflow.com/questions/57057947/how-to-inline-css-in-the-head-tag-of-a-nextjs-project
const doGetContent = (file) => readFileSync(resolve(process.cwd(), '.next', file), 'utf8');
const getContent = process.env.NODE_ENV === 'production' ? memoize(doGetContent) : doGetContent;

const getInlineStylesTag = (documentProps) => {
  const { assetPrefix, files } = documentProps;
  if (!files || files.length === 0) return null;

  return files.filter((file) => /\.css$/.test(file)).map((file) => (
    <style
      key={file}
      data-href={`${assetPrefix}/_next/${file}`}
      dangerouslySetInnerHTML={{
        __html: getContent(file),
      }}
    />
  ));
};

class InlineStylesHead extends Head {
  getCssLinks() {
    return getInlineStylesTag(this.context._documentProps);
  }
}

export default InlineStylesHead;
