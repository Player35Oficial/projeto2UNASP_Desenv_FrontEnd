import Rectangle from '../Rectangle';

import iconReaction from '../../assets/icon-reaction.svg';
import iconMemory from '../../assets/icon-memory.svg';
import iconVerbal from '../../assets/icon-verbal.svg';
import iconVisual from '../../assets/icon-visual.svg';
import './index.css';

export default function Summary() {
  return (
    <main className="summary">
      <h2>Sumário</h2>
      <Rectangle icon={iconReaction} type={'Reaction'} number={80} color="red" />
      <Rectangle icon={iconMemory} type={'Memory'} number={92} color="yellow" />
      <Rectangle icon={iconVerbal} type={'Verbal'} number={61} color="green" />
      <Rectangle icon={iconVisual} type={'Visual'} number={73} color="blue" />

      <button className="button">Continue</button>
    </main>
  );
}
