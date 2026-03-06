import React, { useState } from 'react';
import EmojiBadgeList from './EmojiBadgeList';
import EmojiPicker from 'emoji-picker-react';
import { useEmojiReaction } from '../hooks/useEmojiReaction';

//이모지 리스트를 보여주고 새 이모지를 추가하는 컴포넌트
const EmojiReaction = ({ recipientId }) => {
  const { emojis, handleAddEmoji } = useEmojiReaction(recipientId);
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  // 이모지 피커 토글 핸들러
  const handlePickerToggle = () => {
    setIsPickerVisible(!isPickerVisible);
  };

  // 이모지 선택 시 호출되는 핸들러
  const handleEmojiSelect = (emojiObject) => {
    handleAddEmoji(emojiObject.emoji);
    setIsPickerVisible(false);
  };

  return (
    <div>
      <EmojiBadgeList emojiData={emojis} />

      <div>
        <button onClick={handlePickerToggle}>추가 +</button>
        
        {isPickerVisible && (
          <div>
            <EmojiPicker onEmojiClick={handleEmojiSelect} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EmojiReaction;