"use client";

import { buttonVariants } from "../ui/button";

import { DocumentType } from "./Sidebar";
import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import React from "react";
import DocumentOperations from "./DocumentOperations";

function DocumentCard({ document }: { document: DocumentType }) {
  const path = usePathname();
  return (
    <div
      className={cn(
        buttonVariants({ variant: "outline" }),
        "h-8 w-full justify-between rounded-none",
        path === `/app${document.publicId}` && "bg-secondary"
      )}
    >
      <Link
        className="flex w-full items-center"
        href={`/app/${document.publicId}`}
      >
        <FileText className="mr-2 h-4 w-4" />
        <div className="w-52 overflow-hidden truncate text-ellipsis whitespace-nowrap">
          {document.title}
        </div>
      </Link>
      <DocumentOperations publicId={document.publicId} title={document.title} />
    </div>
  );
}

export default DocumentCard;
