export type TestID = string | number | undefined;
export type TestProps = {
  testID?: TestID;
};
export type OmitRNTestProps<T> = Omit<T, 'testID'>;

const SEPARATOR = '_';
let testPropsEnabled = true;

const combineLabels = (labels: (TestID | null | false)[]) =>
  labels.filter(Boolean).join(SEPARATOR);

/**
 * Rules:
 * 1. Use TestProps in your types instead of direct usage `testID?: string`
 * 2. Use {...testProps('label')} instead of direct passing label (testID="label")
 */

/**
 * Create or combine testIDs to new testID
 * Example:
 *  const prefixTestID = 'Prefix'
 *  const focused = true
 *  testID(prefixTestID, 'MyTestID', focused && 'Focused') result is 'Prefix_MyTestID_Focused'
 */
export const combineTestID = (...labels: (TestID | null | false)[]): TestID => {
  if (testPropsEnabled) {
    return combineLabels(labels);
  }
  return undefined;
};

/**
 * Hide test key into helper to not share test realization between components
 * So we can change testID to accessibilityLabel in one place
 *
 * usage example:
 * <View foo={true} {...otherProps} {...testProps('my-view-test-label')} />
 */
export const testProps = (...labels: TestID[]) => {
  if (!testPropsEnabled || labels.length === 0) {
    return {};
  }
  return {
    testID: combineLabels(labels),
  };
};

export const disableTestProps = () => {
  testPropsEnabled = false;
};
