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
      <FormField.Label>
        Address
        <Tooltip title="More info goes here">
          <TertiaryButton icon={infoIcon} size="small" />
        </Tooltip>
      </FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextInput} />
      </FormField.Field>
    </FormField>
  </Flex>
);
