import AutoRef from './AutoRef.svelte';
import type { Heading } from './Heading';
import type { Label, Labels, LabelType } from './Labels.svelte';
import Section from './Section.svelte';
import SubSection from './SubSection.svelte';
import SubSubSection from './SubSubSection.svelte';

export type LabelsContext = {
	addHeading: (title: string, level: number) => Heading;
	addLabel: (title: string, type: LabelType) => Label;
	removeLabel: (label: Label) => void;
	labels: Labels;
};

export { AutoRef, Section, SubSection, SubSubSection };
