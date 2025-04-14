import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {infoIcon} from '@workday/canvas-system-icons-web';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';
import {createStyles} from '@workday/canvas-kit-styling';

const containerStyles = createStyles({
  flexDirection: 'row',
  gap: system.space.x2,
});

const labelStyles = createStyles({
  minWidth: 'unset',
  width: '100%',
});

export const ContextualHelp = () => (
  <Flex>
    <FormField>
      <Flex className={containerStyles}>
        <FormField.Label className={labelStyles}>Address</FormField.Label>
        <Tooltip title="Your full street address" type="description" placement="right">
          <TertiaryButton icon={infoIcon} size="small" aria-label="Info" />
        </Tooltip>
      </Flex>
      <FormField.Field>
        <FormField.Input as={TextInput} />
      </FormField.Field>
    </FormField>
  </Flex>
);
