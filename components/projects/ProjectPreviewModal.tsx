"use client";
import ModalWrapper, {
  BaseModalProps,
} from "@/components/elements/ModalWrapper";
import Image from "next/image";
import type { FC } from "react";

interface ProjectPreviewModalProps {
  image: string;
}

const ProjectPreviewModal: FC<ProjectPreviewModalProps & BaseModalProps> = ({
  isOpen,
  setIsOpen,
  image,
}) => {
  return (
    <ModalWrapper title="Preview Project" isOpen={isOpen} setIsOpen={setIsOpen}>
      <Image
        src={image}
        height={500}
        width={500}
        alt="project preview"
        className="object-cover min-w-full h-full"
      />
    </ModalWrapper>
  );
};
export default ProjectPreviewModal;
