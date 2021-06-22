import { ProjectInput } from './components/project-input';
import { ProjectList } from './components/project-list';

import _ from 'lodash';

declare var GLOBAL: string;

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');

console.log(_.shuffle([1, 2, 3]));

console.log(GLOBAL);
