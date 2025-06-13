import { RepoImageMap, socialMediaDataInterface } from '@/types/interfaces';

import VoiceoverPortfolio from '@/assets/projects/geovana-locutora.png';
import ExpenseManager from '@/assets/projects/expense-manager.png';
import RinhaDeBackend from '@/assets/projects/rinhaDeBackend.jpg';
import NestJSLogo from '@/assets/projects/nest.png';
import PicpayMockup from '@/assets/projects/picpay-mockup.png';

export const repoImageMap: RepoImageMap[] = [
  { id: 717897351, image: ExpenseManager },
  { id: 717897492, image: ExpenseManager },
  { id: 687778789, image: VoiceoverPortfolio },
  { id: 760707842, image: RinhaDeBackend },
  { id: 834689428, image: NestJSLogo },
  { id: 703794737, image: PicpayMockup },
];

// export const highlightRepositories = {
//   frontend: ['687778789', '717897351', '867834577'],
//   backend: ['865024476', '834689428', '717897492'],
// };

export const socialMedia: socialMediaDataInterface = {
  name: 'Ícaro Cedraz',
  linkedin: 'https://www.linkedin.com/in/cedraz/',
  github: 'https://github.com/cedraz',
  email: 'icarocedraz7@gmail.com',
  repository: 'https://github.com/cedraz/portfolio-next',
};
