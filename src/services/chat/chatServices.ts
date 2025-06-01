import {chatDataI} from '@/components/chat/ChatContainer/ChatContainer';

interface CreateChatElementAttrI
  extends Omit<chatDataI, 'createdAt' | 'isEdited' | 'editedAt'> {
  content?: chatDataI['content'];
  media?: chatDataI['media'];
  mediaType?: chatDataI['mediaType'];
}
export const createChatElement = (attr: CreateChatElementAttrI): chatDataI => {
  if (!attr.content && !attr.media) {
    throw new Error('Atleast media or content is required!');
  }
  const utcDate = new Date().toUTCString();
  const chatData: chatDataI = {
    userId: attr.userId,
    userData: attr.userData,
    chatRoomId: attr.chatRoomId,
    content: attr.content ?? null,
    media: attr.media,
    mediaType: attr.mediaType,
    createdAt: utcDate,
    isEdited: false,
    editedAt: null,
  };
  return chatData;
};
