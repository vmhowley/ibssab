
     H DftActGrp(*No) Option(*SrcStmt) BndDir('CGIDEV2/CGIDEV2')

       // Standard IBM supplied Open Access definitions
      /copy qrnopenacc
       // CGIDEV2 Prototypes
      /copy cgidev2/qrpglesrc,prototypeb
       // QUSEC error structure definition
      /copy cgidev2/qrpglesrc,usec

      // On V7 and later systems this PR can be removed and so can those for
      //   local subprocedures openFile(), writeFile() and closeFile().
     D WebPrinter      pr                  ExtPgm('WEBPRINTER')
     D   info                              likeds(QrnOpenAccess_T)

      // Definitions for local subprocedures
     D openFile        pr

     D writeFile       pr

     D closeFile       pr

     D WebPrinter      pi
     D   info                              likeds(QrnOpenAccess_T)

      // Field Names/Values structures
     D nvInput         ds                  likeds(QrnNamesValues_T)
     D                                     based(pNvInput)

      /free

         If info.rpgOperation = QrnOperation_WRITE;
            // Set up access to Name/Value information
             pNvInput = info.namesValues;
            // Write error is unlikely but signal it if it occurs
             writeFile();

         elseIf info.rpgOperation = QrnOperation_OPEN;
            // Specify that we want to use Name/Value intformation
            info.useNamesValues = *On;
            openFile();
         elseIf info.rpgOperation = QrnOperation_CLOSE;
            closeFile();

         else;
            // Any other operation is unsupported so notify RPG
            info.rpgStatus = 1299;  // general error status
         endif;

       Return;

      /end-free


     P openFile        b
     D openFile        pi

     

     P openFile        e

     P closeFile       b
     D closeFile       pi

      

     P closeFile       e

     P writeFile       b
     D                 pi

     D value           s          32470a   Based(pvalue)
     D i               s              5i 0
      /free
       // Process all fields in record
       For i = 1 to nvInput.num;
         pvalue = nvInput.field(i).value; // set up to access data


       EndFor;

       // Now write out current record format

       WrtSection( info.recordName );

       Return;

      /end-free
     P writeFile       e