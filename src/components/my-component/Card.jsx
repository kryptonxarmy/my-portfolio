// CardService.js
import React from "react";
import { PencilRuler } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BorderBeam } from "../magicui/border-beam";

export function CardService({ title, description, icon }) {
  return (
    <Card className="w-[70vw] md:w-1/5 mx-auto bg-transparent overflow-hidden border-4 border-transparent relative">
      <CardHeader className="flex justify-center items-center p-4">
        <div className="text-red-800">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-red-700">
          <h1 className="text-2xl font-bold text-center">{title}</h1>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-white text-center">{description}</p>
      </CardFooter>
      <BorderBeam size={250} duration={12} delay={9} />
    </Card>
  );
}
