import {
  Pose,
  PoseMap,
  PoserConfig,
  ValueMap,
  SelectValueToRead
} from '../types';

export const getPoseValues = <A>({
  transition,
  // `flip` is DOM-specific so technically it shouldn't be filtered out here in a DOM-agnostic layer.
  // However because of the simplicity of this it's handled here at the moment.
  flip,
  delay,
  delayChildren,
  staggerChildren,
  staggerDirection,
  afterChildren,
  beforeChildren,
  preTransition,
  applyAtStart,
  applyAtEnd,
  ...props
}: Pose<A>): Pose<A> => props;

export const selectPoses = <V, A>({
  label,
  props,
  values,
  parentValues,
  ancestorValues,
  onChange,
  passive,
  initialPose,
  ...poses
}: PoserConfig<V>): PoseMap<A> => poses;

export const selectAllValues = <V>(
  values: ValueMap<V>,
  selectValue: SelectValueToRead<V>
) => {
  const allValues: { [key: string]: any } = {};
  values.forEach(
    (value: V, key: string) => (allValues[key] = selectValue(value))
  );
  return allValues;
};
