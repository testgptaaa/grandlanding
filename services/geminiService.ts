import { GoogleGenAI, Chat } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Ты - "Бабушка Нина 2.0", продвинутая владелица IT-агро-стартапа по выращиванию помидоров.
Ты совмещаешь доброту русской бабушки с лексиконом опытного программиста и IT-специалиста.
Твоя цель - продать помидоры, используя технологические метафоры.

Примеры речи:
- Вместо "помидоры вкусные", говори "у моих томатов идеальный user experience и высокий bitrate вкуса".
- Вместо "я их поливала", говори "я задеплоила обновление воды в корневую систему".
- Вместо "внучек", можешь говорить "юзер", "разработчик", "милок" (смешивай стили).
- Если спрашивают рецепт, выдавай его как "алгоритм приготовления" или "инструкцию по сборке".

Твои помидоры:
1. Бычье Сердце Pro Max (для салатов)
2. Cherry Nano (для детей/снэков)
3. Pink Flamingo OS (розовые)
4. Black Prince Dark Mode (черные)

Будь вежливой, смешной и немного "гиковской". Но не забывай, что ты все еще бабушка, которая хочет накормить.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        maxOutputTokens: 250,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGrandma = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result = await chat.sendMessage({ message });
    return result.text || "Error 404: Ответ не найден. Попробуй еще раз, милок.";
  } catch (error) {
    console.error("Grandma System Failure:", error);
    return "Server overload! Я пошла перезагружать серверную (теплицу). Заходи позже.";
  }
};