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
      <Rectangle class="rectangle" icon={iconReaction} type={'Reaction'} number={80} color="red" />
      <Rectangle class="rectangle" icon={iconMemory} type={'Memory'} number={92} color="yellow" />
      <Rectangle class="rectangle" icon={iconVerbal} type={'Verbal'} number={61} color="green" />
      <Rectangle class="rectangle" icon={iconVisual} type={'Visual'} number={73} color="blue" />

      <button>Continue</button>
    </main>
  );
}
