import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { useState } from 'react';

export function SearchInput() {
  const [value, setValue] = useState('');

  const onChangeText = (text: string) => {
    setValue(text);
  };

  return (
      <Input
        placeholder='Write some stuff...'
        className='w-full bg-white border rounded-md'
        // style={{ width: '100%', backgroundColor: 'white' }}
        value={value}
        onChangeText={onChangeText}
        aria-labelledby='inputLabel'
        aria-errormessage='inputError'
      />
  );
}