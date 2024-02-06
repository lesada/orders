import clsx from "clsx";
import { Pressable, PressableProps, Text } from "react-native";

interface CategoryButtonProps extends PressableProps {
  title: string;
  isSelected?: boolean;
}

function CategoryButton({
  title,
  isSelected = false,
  ...rest
}: CategoryButtonProps) {
  return (
    <Pressable
      className={clsx(
        "bg-slate-800 px-4 justify-center rounded-md h-10",
        isSelected && "border-2 border-lime-300",
      )}
      {...rest}
    >
      <Text className="text-slate-100 font-subtitle text-sm">{title}</Text>
    </Pressable>
  );
}

export default CategoryButton;
