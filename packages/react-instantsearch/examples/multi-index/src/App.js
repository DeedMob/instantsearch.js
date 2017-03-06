import React from 'react';
import {InstantSearch, Hits, SearchBox, MultiIndexContext} from 'react-instantsearch/dom';
import 'react-instantsearch-theme-algolia/style.css';

const App = () =>
  <InstantSearch
    appId="latency"
    apiKey="6be0576ff61c053d5f9a3225e2a90f76"
    indexName="bestbuy"
  >
    <SearchBox/>
    <p>Results in first dataset</p>
    <Hits />
    <MultiIndexContext indexName="ikea">
      <p>Results in second dataset</p>
      <Hits />
    </MultiIndexContext>
  </InstantSearch>;

export default App;