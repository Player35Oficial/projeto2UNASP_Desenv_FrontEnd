import Rectangle from '../Rectangle';

import iconReaction from '../../assets/icon-reaction.svg';
import iconMemory from '../../assets/icon-memory.svg';
import iconVerbal from '../../assets/icon-verbal.svg';
import iconVisual from '../../assets/icon-visual.svg';
import './index.css';

export default function Summary() {
  return (
    <div className="summary">
      <h2>Sumário</h2>
      <Rectangle class="rectangle" icon={iconReaction} type={'Reaction'} number={80} />
      <Rectangle icon={iconMemory} type={'Memory'} number={92} />
      <Rectangle icon={iconVerbal} type={'Verbal'} number={61} />
      <Rectangle icon={iconVisual} type={'Visual'} number={73} />

      <button>Continue</button>
    </div>
  );
}
