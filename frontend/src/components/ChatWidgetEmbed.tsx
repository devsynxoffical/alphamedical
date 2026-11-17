import React, { useEffect } from 'react';

interface ChatWidgetEmbedProps {
  siteId?: string;
  serverUrl?: string;
}

export const ChatWidgetEmbed: React.FC<ChatWidgetEmbedProps> = ({
  siteId = 'alpha-medi-assist',
  serverUrl = 'https://chat.zingoassist.us'
}) => {
  useEffect(() => {
    if (document.getElementById('ag-chat-widget-script')) {
      if ((window as any).AntigravityChat) {
        (window as any).AntigravityChat.init({ siteId, serverUrl });
      }
      return;
    }

    const script = document.createElement('script');
    script.id = 'ag-chat-widget-script';
    script.src = `${serverUrl}/widget/chat-widget.js`;
    script.async = true;
    script.onload = () => {
      if ((window as any).AntigravityChat) {
        (window as any).AntigravityChat.init({ siteId, serverUrl });
      }
    };
    document.body.appendChild(script);
  }, [siteId, serverUrl]);

  return null;
};

export default ChatWidgetEmbed;
