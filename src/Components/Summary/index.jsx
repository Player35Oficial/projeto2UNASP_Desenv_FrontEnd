import Rectangle from '../Rectangle';

import iconReaction from '../../assets/icon-reaction.svg';
import iconMemory from '../../assets/icon-memory.svg';
import iconVerbal from '../../assets/icon-verbal.svg';
import iconVisual from '../../assets/icon-verbal.svg';

export default function Summary() {
  return (
    <div>
      <h2>Componente de Sumário</h2>
      <Rectangle icon={iconReaction} type={'Reaction'} number={80} />
      <Rectangle icon={iconMemory} type={'Memory'} number={92} />
      <Rectangle icon={iconVerbal} type={'Verbal'} number={61} />
      <Rectangle icon={iconVisual} type={'Visual'} number={73} />
    </div>
  );
}
