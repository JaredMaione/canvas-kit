import React from 'react';
import {PrimaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {infoIcon} from '@workday/canvas-system-icons-web';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';

export const ContextualHelp = () => (
  <Flex>
    <FormField>
      <FormField.Label>Address</FormField.Label>
      <Tooltip title="More info goes here" type="description">
        <TertiaryButton icon={infoIcon} size="small" aria-label="Info" />
      </Tooltip>
      <FormField.Field>
        <FormField.Input as={TextInput} />
      </FormField.Field>
    </FormField>
  </Flex>
);
