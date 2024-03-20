import {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { OnboardingInfo } from '../../types/PostNew';

interface OnboardingInfoContext {
  onboardingInfo: OnboardingInfo;
  updateOnboardingInfo: (newInfo: Partial<OnboardingInfo>) => void;
  selectedTime: string;
  setSelectedTime: React.Dispatch<SetStateAction<string>>;
}

const initialOnboardingInfo: OnboardingInfo = {
  sns: '',
  age: [],
  gender: [],
  type: '',
  subject: '',
  content: '',
  imageUrl: '',
};

const OnboardingContext = createContext<OnboardingInfoContext>({
  onboardingInfo: initialOnboardingInfo,
  updateOnboardingInfo: () => {},
  selectedTime: '',
  setSelectedTime: () => {},
});

export const useOnboardingContext = () => useContext(OnboardingContext);

export const OnboardingProvider = ({ children }: PropsWithChildren) => {
  const [onboardingInfo, setOnboardingInfo] = useState<OnboardingInfo>(initialOnboardingInfo);
  const [selectedTime, setSelectedTime] = useState<string>('');

  const updateOnboardingInfo = (newInfo: Partial<OnboardingInfo>) => {
    setOnboardingInfo((prev) => ({ ...prev, ...newInfo }));
  };

  /**@todo 전체 값 확인용 useEffect */
  useEffect(() => {
    console.log('전체 값 확인:', onboardingInfo);
    console.log('context 속 selectedTime', selectedTime);
    console.log('context 속 typeof selectedTime', typeof selectedTime);
  }, [onboardingInfo, selectedTime]);

  const OnboardingInfoContextValue = useMemo(
    () => ({
      onboardingInfo,
      updateOnboardingInfo,
      selectedTime,
      setSelectedTime,
    }),
    [onboardingInfo, selectedTime],
  );

  return (
    <OnboardingContext.Provider value={OnboardingInfoContextValue}>
      {children}
    </OnboardingContext.Provider>
  );
};