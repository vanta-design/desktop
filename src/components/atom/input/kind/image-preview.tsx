import { ImagePlus } from 'lucide-react';
import { type ChangeEvent, useCallback, useRef, useState } from 'react';
import { Flex } from '@/components/layout/flex';
import { text } from '@/tokens/color.css';
import { Icon } from '../../icon';
import { image, input, wrapper } from './styles/image-preview.css';

interface _ImagePreviewInputProps {
  previewSrc?: string;
  onChange?: (files: File) => void;
}

export function _ImagePreviewInput(props: _ImagePreviewInputProps) {
  const { previewSrc, onChange: propOnChange } = props;
  const [currentPreview, setCurrentPreview] = useState(previewSrc || '');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      const selectedFile = files?.[0];
      if (!selectedFile) return;

      setCurrentPreview(URL.createObjectURL(selectedFile));
      propOnChange?.(selectedFile);
    },
    [propOnChange],
  );

  return (
    <Flex className={wrapper} align='center' justify='center' onClick={onClick}>
      {currentPreview ? (
        <img className={image} src={currentPreview} alt='Preview' />
      ) : (
        <Icon icon={ImagePlus} size={24} color={text.tertiary} />
      )}
      <input
        className={input}
        type='file'
        ref={inputRef}
        multiple={false}
        accept='image/*'
        onChange={onChange}
      />
    </Flex>
  );
}
