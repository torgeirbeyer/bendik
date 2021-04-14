import React from 'react';
import { config } from './config';
import { createClient, createImageUrlBuilder } from 'next-sanity';

import BlockContent from '@sanity/block-content-to-react';

export const urlFor = (source) => createImageUrlBuilder(options).image(source);

export const client = createClient(config);





